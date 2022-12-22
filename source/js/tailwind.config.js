tailwind.config = {
    theme: {
      extend: {
        colors: {
          dark: 'rgba(33,33,33)',
        },
        height: {
          '100vh': 'calc(100vh - 80px)',
          //'189': '756px',
        },
        backgroundImage: {
          firstImage: "url('/source/media/images/1.jpg')",
          secondImage: "url('/source/media/images/2.jpg')",
          thirdImage: "url('/source/media/images/thirdImage.webp')",
          fithdImage: "url('/source/media/images/where.webp')",
        },
        content:{
        },
        gridTemplateColumns: {
          'cards': 'repeat(auto-fit, minmax(290px, 1fr))',
          'cardsVert': 'repeat(auto-fit, minmax(213px, 1fr))',
        }
      },
      minHeight: {
        '20': '5rem',
        '100vh': 'calc(100vh - 80px)',

      },
      scale: {
        '300': '3',
      },
      fontFamily:{
        Montserrat: "Montserrat"
      }
    }
  }

