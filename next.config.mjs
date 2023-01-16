/**
 * Generics give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */

 function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl'
  }
});
