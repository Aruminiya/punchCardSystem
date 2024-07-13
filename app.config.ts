export default defineAppConfig({
  ui: {
    primary: 'phototaxisBlue',
    button: {
        size: {
            '2xs': 'text-xs',
            xs: 'text-xs',
            sm: 'text-sm',
            md: 'text-sm',
            lg: 'text-sm',
            xl: 'text-base',
          },
        // color: {
        //   white: {
        //     solid: 
        //       'text-gray-600',
        //   }
        // },
    },
    badge: {
      variant: {
        solid: 'bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900',
        outline: 'text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400',
        soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400',
        subtle: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25',
      },
    }
  }
})