import {Pool} from "pg"
const db = new Pool({
  connectionString: "postgresql://postgres:vOkZqJMnEeLIyPBsdjUBWnuwEXhhDDQZ@crossover.proxy.rlwy.net:59049/railway",
})
export default db