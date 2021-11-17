// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handle(req, res) {
    const { pip } = req.query
    res.end(`Post: ${pip}`)
  }
  