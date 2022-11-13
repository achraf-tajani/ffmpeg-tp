const pathToFfmpeg = require("ffmpeg-static");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
(async function () {
  try {
    console.log("start");
    console.log(pathToFfmpeg)
    // await exec(
    //   `"${pathToFfmpeg}" -f concat -i piste.txt -pix_fmt yuv420p movie.mp4`
    // );
    console.log("end");
  } catch (e) {
    console.log("error",e);
  }
})();
