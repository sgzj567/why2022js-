import axios from 'axios'
function getData() {
  // const res = await axios.post("/admin/login", {
  //   data: {
  //     username: "admin",
  //     password: "admin",
  //   }
  // })
  // return res
  return axios.post("/admin/login", {
    data: {
      username: "admin",
      password: "admin"
    }
  })
}
export default getData