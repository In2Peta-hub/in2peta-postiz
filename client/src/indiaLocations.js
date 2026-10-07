/** Curated India locations for GrowthCrew outreach autocomplete (offline). */

const ENTRIES = [
  // Metros & major cities
  { city: 'Bengaluru', state: 'Karnataka', aliases: ['bangalore', 'blr'] },
  { city: 'Mumbai', state: 'Maharashtra', aliases: ['bombay'] },
  { city: 'Delhi', state: 'Delhi', aliases: ['new delhi', 'ncr'] },
  { city: 'New Delhi', state: 'Delhi', aliases: ['delhi'] },
  { city: 'Hyderabad', state: 'Telangana', aliases: ['hyd'] },
  { city: 'Chennai', state: 'Tamil Nadu', aliases: ['madras'] },
  { city: 'Kolkata', state: 'West Bengal', aliases: ['calcutta'] },
  { city: 'Pune', state: 'Maharashtra', aliases: ['poona'] },
  { city: 'Ahmedabad', state: 'Gujarat', aliases: ['amdavad'] },
  { city: 'Jaipur', state: 'Rajasthan' },
  { city: 'Surat', state: 'Gujarat' },
  { city: 'Lucknow', state: 'Uttar Pradesh' },
  { city: 'Kanpur', state: 'Uttar Pradesh' },
  { city: 'Nagpur', state: 'Maharashtra' },
  { city: 'Indore', state: 'Madhya Pradesh' },
  { city: 'Bhopal', state: 'Madhya Pradesh' },
  { city: 'Patna', state: 'Bihar' },
  { city: 'Vadodara', state: 'Gujarat', aliases: ['baroda'] },
  { city: 'Ghaziabad', state: 'Uttar Pradesh' },
  { city: 'Ludhiana', state: 'Punjab' },
  { city: 'Agra', state: 'Uttar Pradesh' },
  { city: 'Nashik', state: 'Maharashtra', aliases: ['nasik'] },
  { city: 'Faridabad', state: 'Haryana' },
  { city: 'Meerut', state: 'Uttar Pradesh' },
  { city: 'Rajkot', state: 'Gujarat' },
  { city: 'Varanasi', state: 'Uttar Pradesh', aliases: ['benares', 'banaras'] },
  { city: 'Srinagar', state: 'Jammu and Kashmir' },
  { city: 'Amritsar', state: 'Punjab' },
  { city: 'Chandigarh', state: 'Chandigarh' },
  { city: 'Thiruvananthapuram', state: 'Kerala', aliases: ['trivandrum'] },
  { city: 'Kochi', state: 'Kerala', aliases: ['cochin'] },
  { city: 'Coimbatore', state: 'Tamil Nadu' },
  { city: 'Madurai', state: 'Tamil Nadu' },
  { city: 'Visakhapatnam', state: 'Andhra Pradesh', aliases: ['vizag'] },
  { city: 'Vijayawada', state: 'Andhra Pradesh' },
  { city: 'Guwahati', state: 'Assam' },
  { city: 'Bhubaneswar', state: 'Odisha' },
  { city: 'Ranchi', state: 'Jharkhand' },
  { city: 'Raipur', state: 'Chhattisgarh' },
  { city: 'Dehradun', state: 'Uttarakhand' },
  { city: 'Mysuru', state: 'Karnataka', aliases: ['mysore'] },
  { city: 'Mangaluru', state: 'Karnataka', aliases: ['mangalore'] },
  { city: 'Hubballi', state: 'Karnataka', aliases: ['hubli'] },
  { city: 'Noida', state: 'Uttar Pradesh' },
  { city: 'Greater Noida', state: 'Uttar Pradesh' },
  { city: 'Gurugram', state: 'Haryana', aliases: ['gurgaon'] },
  { city: 'Thane', state: 'Maharashtra' },
  { city: 'Navi Mumbai', state: 'Maharashtra' },
  { city: 'Kalyan', state: 'Maharashtra' },
  { city: 'Howrah', state: 'West Bengal' },
  { city: 'Jamshedpur', state: 'Jharkhand' },
  { city: 'Jodhpur', state: 'Rajasthan' },
  { city: 'Udaipur', state: 'Rajasthan' },
  { city: 'Allahabad', state: 'Uttar Pradesh', aliases: ['prayagraj'] },
  { city: 'Prayagraj', state: 'Uttar Pradesh', aliases: ['allahabad'] },
  { city: 'Gwalior', state: 'Madhya Pradesh' },
  { city: 'Jabalpur', state: 'Madhya Pradesh' },
  { city: 'Aurangabad', state: 'Maharashtra', aliases: ['chhatrapati sambhajinagar'] },
  { city: 'Solapur', state: 'Maharashtra' },
  { city: 'Kolhapur', state: 'Maharashtra' },
  { city: 'Tiruchirappalli', state: 'Tamil Nadu', aliases: ['trichy'] },
  { city: 'Salem', state: 'Tamil Nadu' },
  { city: 'Tirunelveli', state: 'Tamil Nadu' },
  { city: 'Warangal', state: 'Telangana' },
  { city: 'Guntur', state: 'Andhra Pradesh' },
  { city: 'Tirupati', state: 'Andhra Pradesh' },
  { city: 'Belagavi', state: 'Karnataka', aliases: ['belgaum'] },
  { city: 'Shimla', state: 'Himachal Pradesh' },
  { city: 'Goa', state: 'Goa', aliases: ['panaji', 'panjim', 'margao'] },
  { city: 'Panaji', state: 'Goa', aliases: ['panjim'] },
  { city: 'Imphal', state: 'Manipur' },
  { city: 'Shillong', state: 'Meghalaya' },
  { city: 'Aizawl', state: 'Mizoram' },
  { city: 'Agartala', state: 'Tripura' },
  { city: 'Gangtok', state: 'Sikkim' },
  { city: 'Itanagar', state: 'Arunachal Pradesh' },
  { city: 'Kohima', state: 'Nagaland' },
  { city: 'Pondicherry', state: 'Puducherry', aliases: ['puducherry'] },
  { city: 'Puducherry', state: 'Puducherry', aliases: ['pondicherry'] },

  // Common tech / business areas (label still City, State, India via area city)
  { city: 'Whitefield', state: 'Karnataka', aliases: ['bengaluru whitefield', 'bangalore whitefield'], parent: 'Bengaluru' },
  { city: 'Koramangala', state: 'Karnataka', aliases: ['bengaluru koramangala'], parent: 'Bengaluru' },
  { city: 'Indiranagar', state: 'Karnataka', parent: 'Bengaluru' },
  { city: 'HSR Layout', state: 'Karnataka', aliases: ['hsr'], parent: 'Bengaluru' },
  { city: 'Electronic City', state: 'Karnataka', aliases: ['ecity'], parent: 'Bengaluru' },
  { city: 'Marathahalli', state: 'Karnataka', parent: 'Bengaluru' },
  { city: 'Andheri', state: 'Maharashtra', parent: 'Mumbai' },
  { city: 'Bandra', state: 'Maharashtra', parent: 'Mumbai' },
  { city: 'Powai', state: 'Maharashtra', parent: 'Mumbai' },
  { city: 'Lower Parel', state: 'Maharashtra', parent: 'Mumbai' },
  { city: 'BKC', state: 'Maharashtra', aliases: ['bandra kurla complex'], parent: 'Mumbai' },
  { city: 'Hinjewadi', state: 'Maharashtra', aliases: ['hinjewadi pune'], parent: 'Pune' },
  { city: 'Kharadi', state: 'Maharashtra', parent: 'Pune' },
  { city: 'Baner', state: 'Maharashtra', parent: 'Pune' },
  { city: 'Kalyani Nagar', state: 'Maharashtra', parent: 'Pune' },
  { city: 'Cyberabad', state: 'Telangana', aliases: ['hitech city', 'hitec city'], parent: 'Hyderabad' },
  { city: 'Gachibowli', state: 'Telangana', parent: 'Hyderabad' },
  { city: 'Madhapur', state: 'Telangana', parent: 'Hyderabad' },
  { city: 'OMR', state: 'Tamil Nadu', aliases: ['old mahabalipuram road'], parent: 'Chennai' },
  { city: 'T Nagar', state: 'Tamil Nadu', aliases: ['t. nagar'], parent: 'Chennai' },
  { city: 'Connaught Place', state: 'Delhi', aliases: ['cp'], parent: 'New Delhi' },
  { city: 'Saket', state: 'Delhi', parent: 'New Delhi' },
  { city: 'Nehru Place', state: 'Delhi', parent: 'New Delhi' },
  { city: 'Cyber Hub', state: 'Haryana', aliases: ['cyber hub gurgaon'], parent: 'Gurugram' },
  { city: 'Sector 62', state: 'Uttar Pradesh', aliases: ['noida sector 62'], parent: 'Noida' },
  { city: 'Salt Lake', state: 'West Bengal', aliases: ['bidhannagar'], parent: 'Kolkata' },
  { city: 'Sector V', state: 'West Bengal', aliases: ['salt lake sector v'], parent: 'Kolkata' },
];

function labelFor(entry) {
  if (entry.parent) {
    return `${entry.city}, ${entry.parent}, ${entry.state}, India`;
  }
  return `${entry.city}, ${entry.state}, India`;
}

function normalize(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const CATALOG = ENTRIES.map((entry) => {
  const label = labelFor(entry);
  const aliases = (entry.aliases || []).map(normalize);
  return {
    label,
    city: entry.city,
    state: entry.state,
    parent: entry.parent || '',
    searchKeys: [normalize(entry.city), normalize(label), ...aliases].filter(Boolean),
  };
});

/** @returns {{ label: string, score: number }[]} */
export function suggestIndiaLocations(query, limit = 8) {
  const q = normalize(query);
  if (!q || q.length < 1) return [];

  const scored = [];
  for (const item of CATALOG) {
    let score = 0;
    for (const key of item.searchKeys) {
      if (key === q) score = Math.max(score, 100);
      else if (key.startsWith(q)) score = Math.max(score, 80 - Math.min(key.length - q.length, 20));
      else if (key.includes(` ${q}`)) score = Math.max(score, 55);
      else if (key.includes(q)) score = Math.max(score, 40);
    }
    // Prefer city proper over area when scores tie-ish
    if (!item.parent && score >= 40) score += 2;
    if (score > 0) scored.push({ label: item.label, score });
  }

  scored.sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
  const seen = new Set();
  const out = [];
  for (const row of scored) {
    if (seen.has(row.label)) continue;
    seen.add(row.label);
    out.push(row);
    if (out.length >= limit) break;
  }
  return out;
}

export const INDIA_LOCATION_COUNT = CATALOG.length;
