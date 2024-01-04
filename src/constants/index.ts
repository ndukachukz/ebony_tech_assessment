export const FAKESTOREAPI = {
  BASE_URL: 'https://fakestoreapi.com/',

  PRODUCTS: function (): string {
    return `${this.BASE_URL}products/`;
  },

  PRODUCT: function (id: number): string {
    return `${this.BASE_URL}products/${id}`;
  },

  CATEGORIES: function (): string {
    return `${this.PRODUCTS()}categories/`;
  },

  CATEGORY: function (category: string) {
    return `${this.PRODUCTS()}category/${category}`;
  },
};

export const FONTS = {
  MONTSERRAT: 'Montserrat-Regular',
  MONTSERRAT_BOLD: 'Montserrat-Bold',
  MONTSERRAT_EXTRA_BOLD: 'Montserrat-ExtraBold',
  MONTSERRAT_BLACK: 'Montserrat-Black',
  MONTSERRAT_LIGHT: 'Montserrat-Light',
  MONTSERRAT_THIN: 'Montserrat-Thin',
  MONTSERRAT_MEDIUM: 'Montserrat-Medium',
  MONTSERRAT_SEMI_BOLD: 'Montserrat-SemiBold',
};

export const COLORS = {
  RAISING_BLACK: '#252525', // Text
  LIGHT_BLUE: '#6C63FF', // Active: Buttons, links  etc
  WHITE: '#FFFFFF', //
  PLACEHOLDER: 'rgba(0, 0, 0, 0.5)',
};

export const FONT_SIZES = {
  HEADER: 24,
};
