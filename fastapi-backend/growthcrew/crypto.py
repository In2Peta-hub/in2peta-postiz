"""AES-256-GCM helpers matching the gpu_platform API key encryption."""

from __future__ import annotations

import base64
import hashlib
import json
import os

from cryptography.hazmat.primitives.ciphers.aead import AESGCM

from config import CONFIG

_DEV_KEY = b"gpu-platform-dev-insecure-key-v1"


def _key_bytes() -> bytes:
    raw = (CONFIG.API_KEY_ENCRYPTION_KEY or "").strip()
    if not raw:
        return hashlib.sha256(_DEV_KEY).digest()
    try:
        decoded = base64.b64decode(raw, validate=True)
    except Exception:
        decoded = b""
    if len(decoded) == 32:
        return decoded
    encoded = raw.encode()
    if len(encoded) == 32:
        return encoded
    return hashlib.sha256(encoded).digest()


def encrypt_string(plaintext: str) -> str:
    iv = os.urandom(12)
    aes = AESGCM(_key_bytes())
    encrypted = aes.encrypt(iv, plaintext.encode(), None)
    ciphertext, tag = encrypted[:-16], encrypted[-16:]
    return json.dumps({
        "v": 1,
        "iv": base64.b64encode(iv).decode(),
        "tag": base64.b64encode(tag).decode(),
        "ct": base64.b64encode(ciphertext).decode(),
    })


def decrypt_string(payload: str) -> str:
    parsed = json.loads(payload)
    if parsed.get("v") != 1 or not parsed.get("iv") or not parsed.get("tag") or not parsed.get("ct"):
        raise ValueError("Encrypted payload format is invalid")
    iv = base64.b64decode(parsed["iv"])
    tag = base64.b64decode(parsed["tag"])
    ciphertext = base64.b64decode(parsed["ct"])
    aes = AESGCM(_key_bytes())
    return aes.decrypt(iv, ciphertext + tag, None).decode()


def decrypt_stored_key(value: str | None) -> str:
    if not value:
        return ""
    if not value.startswith("{"):
        return value
    try:
        return decrypt_string(value)
    except Exception:
        return ""
