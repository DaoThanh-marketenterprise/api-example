// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handle(req, res) {
    res.status(200).json({ 
        name            : 'Dao Thanh',
        nick_name       : 'Mr.Xep',
        birth_day       : '22/05/1995',
        marital_status  : 'single',
        interests       : 'Girl, basketball...'
    })
  }
  