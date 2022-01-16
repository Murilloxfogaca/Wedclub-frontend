export default function getMockValue(method: string, url: string, params: any) {
  return new Promise<{ data: any }>(resolve => {
    const mock: (arg0: any) => any = null;
    setTimeout(() => resolve({ data: mock(params) }), 1000 + 2000 * Math.random());
  });
}
