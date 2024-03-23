import testRouter from './routes/test';

//
const router = {
  route: async function(url, req, res) {
    let data = null; 
    try {
//console.log(req);
      if(url === "/api/test2") {
        data = await testRouter.test2();
//console.log(data);
        return (data);
      }
      if(url === "/api/test3") {
        data = await testRouter.test3();
//console.log(data);
        return (data);
      }
      if(url === "/api/test4") {
        data = {ret: "test4!!!", data:[3,4,5,6]};
//console.log(data);
        return (data);
      }
      return ({ret: "route", message:"error, no routes" });
    } catch (error) {
      console.error(error)
      throw new Error("error, router.route()");
    }
  },
}

export default router;
