module.exports = {
  root: true, //구성 파일을 찾을 때 상위 디렉토리로 이동하지 않고 현재 디렉토리부터 검색할 것
  env: { browser: true, es2020: true, node: true }, // 코드가 실행되는 환경을 지정
  extends: [
    //ESLint 구성 파일을 확장
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], //ESLint가 무시해야 하는 파일이나 디렉토리를 지정
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }, //코드를 구문 분석할 때 사용되는 설정을 제공
  settings: { react: { version: '18.2' } }, //플러그인이나 확장을 위한 추가 설정을 제공
  plugins: ['react-refresh'], //추가 플러그인을 로드
  rules: {
    //코드 검사 규칙을 지정
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-undef': ['error', { typeof: true }], // no-undef 규칙에서 typeof는 허용하고,
    'node/no-unsupported-features/es-syntax': ['off'], // Vite에서 지원되지 않는 ES 문법 경고 해제
  },
};
