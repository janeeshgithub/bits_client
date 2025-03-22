module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#121212',
          secondary: '#1E1E2E',
          tertiary: '#252733',
        },
        accent: {
          blue: '#4A90E2',
          cyan: '#00D4FF',
          orange: '#FF8C42',
          yellow: '#F5A623',
        },
        text: {
          primary: '#EAEAEA',
          secondary: '#B0B0B0',
          disabled: '#8F8F9D',
        }
      }
    }
  }
}