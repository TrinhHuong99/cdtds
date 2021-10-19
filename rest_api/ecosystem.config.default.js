module.exports = {
    apps: [{
      name: "olm-tracking",
      node_args: "--max_old_space_size=8192 --nouse-idle-notification",
      script: "server.js",
      error_file: "/dev/null",
      out_file: "/dev/null",
      watch: ["server", "client"],
      // Delay between restart
      watch_delay: 1000,
      ignore_watch : [""],
      watch_options: {
        "followSymlinks": false
      }
    }]
  }
  