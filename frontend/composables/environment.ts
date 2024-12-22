export const useEnvironment = ()  => {
  const isProduction = () :boolean => process.env.NODE_ENV === 'production';
  const isDevelopment = () :boolean => process.env.NODE_ENV === 'development';
  const isServer = () :boolean => typeof window === 'undefined';
  const isClient = () :boolean => typeof window !== 'undefined';

  return {
    isProduction,
    isDevelopment,
    isServer,
    isClient,
  };
};
