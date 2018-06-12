const axios = require('axios')

const BASE_URL = require('../../constants/api')

const endpoint = `${BASE_URL}/auth2step/generate`

module.exports = async (email, generateNew) => {
  let url = endpoint;
  if (generateNew) {
    url = `${url}&new=true`
  }
  try {
    const res = await axios.post(url,{
      email:email,
      new:generateNew
    })
    return res.data
  } catch (err) {
    throw err.response ? err.response.data : new Error(err)
  }
}
