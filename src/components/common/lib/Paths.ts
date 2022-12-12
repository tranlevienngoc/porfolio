class Paths {
  routePaths: { [key: string]: string | ((ids: string[]) => string) };
  servicePaths: { [key: string]: string | ((ids: string[]) => string) };

  constructor(params: { basename?: string } = {}) {
    const basename = params.basename || '';
    const service = ' https://unifront-mock-url.herokuapp.com';

    this.routePaths = {
      root: '/',
      basename: `/${basename}`,
    };
    this.servicePaths = {
      service: `${service}`,
    };
  }

  buildRoute(key: string, ids?: string[]) {
    ids = Array.isArray(ids) ? ids : [ids || ''];
    const path = this.routePaths[key];
    return typeof path === 'function' ? path(ids) : path;
  }

  buildService(key: string, ids?: string[]) {
    ids = Array.isArray(ids) ? ids : [ids || ''];
    ids = ids.map((id) => encodeURIComponent(id));
    const path = this.servicePaths[key];
    return typeof path === 'function' ? path(ids) : path;
  }

  absolute(key: string, ids?: string[]): string {
    return this.buildRoute(key, ids);
  }

  route(key: string, ids: string[]) {
    return {
      pathname: this.buildRoute(key, ids),
      search: window.location.search,
    };
  }
  service(key: string, ids?: string[]) {
    return `${this.servicePaths.service}${this.buildService(key, ids)}`;
  }
}

export default Paths;
