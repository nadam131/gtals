import { Global } from "@emotion/react";
import React from "react";

const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
            font-family: 'GTA Russian';
            src: url('/assets/fonts/GTARussian/GTARussian-Regular.eot');
            src: url('/assets/fonts/GTARussian/GTARussian-Regular.eot?#iefix')
                    format('embedded-opentype'),
                url('/assets/fonts/GTARussian/GTARussian-Regular.woff2') format('woff2'),
                url('/assets/fonts/GTARussian/GTARussian-Regular.woff') format('woff'),
                url('/assets/fonts/GTARussian/GTARussian-Regular.ttf') format('truetype'),
                url('/assets/fonts/GTARussian/GTARussian-Regular.svg#GTARussian-Regular')
                    format('svg');
            font-weight: normal;
            font-style: normal; 
            font-display: swap;
        }

        @font-face {
          font-family: 'Copyright';
          src: url('/assets/fonts/CopyrightHouseIndustries/CopyrightHouseIndustries.eot');
          src: url('/assets/fonts/CopyrightHouseIndustries/CopyrightHouseIndustries.eot?#iefix')
                  format('embedded-opentype'),
              url('/assets/fonts/CopyrightHouseIndustries/CopyrightHouseIndustries.woff2') format('woff2'),
              url('/assets/fonts/CopyrightHouseIndustries/CopyrightHouseIndustries.woff') format('woff'),
              url('/assets/fonts/CopyrightHouseIndustries/CopyrightHouseIndustries.ttf') format('truetype'),
              url('/assets/fonts/CopyrightHouseIndustries/CopyrightHouseIndustries.svg#GTARussian-Regular')
                  format('svg');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }
    `}
    />
  );
};

export default Fonts;
