module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      container:{
        center: true,
        padding: '1rem'
      },
      colors:{
        "primary": "#fd3d57",
        "white": "#fff",
        "gray": "#1F2937",
        "gray-100": "#f3f4f6",
        "gray-400": "#9ca3af",
        "yellow-400": "#facc15",
        "black": "#000"
      },
      fontFamily:{
        poppins: "'poppins',sans-serif",
        roboto: "'Roboto',sans-serif"
      },
      extend: {
        display: ["group-hover"],
        visibility: ["group-hover"]
      },
    },
    plugins: [],
  }