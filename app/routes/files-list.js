import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FilesListRoute extends Route {
  @service filesService;

  async model() {
    return await this.filesService.list();
  }
}
