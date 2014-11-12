module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-simple-mocha");
  grunt.loadNpmTasks("grunt-jscs");

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ["./index.js", "./test/*.js"]
    },

    jscs: {
      options: {
        config: ".jscsrc"
      },
      src: ["./index.js"]
    },

    simplemocha: {
      src: ["./test/*.js"]
    }
  });

  grunt.registerTask("test", ["jshint", "jscs", "simplemocha"]);
  grunt.registerTask("default", ["test"]);
};
