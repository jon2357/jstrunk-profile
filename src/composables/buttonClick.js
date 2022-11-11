import router from "@/router";

const internalRouteClick = (btnValue) => {
  if (btnValue) {
    let payload;
    if (Array.isArray(btnValue)) {
      payload = { path: "/" + btnValue[0] + btnValue[1] };
    } else {
      payload = { name: btnValue };
    }
    // console.log(payload);
    router.push(payload);
  }
};

export { internalRouteClick };
