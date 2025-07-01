/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './posts/**/*.mdx', // Make sure your MDX files are included here
    ],
    theme: {
        extend: {
            // Add this 'colors' object for the test
            colors: {
                'debug-red': '#ff0000',
            },
            typography: {
                DEFAULT: {
                    css: {
                        'p, ul, ol': {
                            marginTop: '0.75em',
                            marginBottom: '0.75em',
                        },
                        'h2, h3, h4': {
                            marginTop: '1.5em',
                            marginBottom: '0.5em',
                        },
                    },
                },

                lg: {
                    css: {
                        'p, ul, ol': {
                            marginTop: '0.75em',
                            marginBottom: '0.75em',
                        },
                        'h2, h3, h4': {
                            marginTop: '1.5em',
                            marginBottom: '0.5em',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
