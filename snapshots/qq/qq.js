Component({
  properties: {
    // alipay | user | setup
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color, originalColor) {
        if (color !== originalColor) {
          this.setData({
            colorIsString: typeof color === 'string',
          });
        }
      }
    },
    size: {
      type: Number,
      value: 24,
    },
  },
  data: {
    quot: '"',
    colorIsString: false,
  },
});
