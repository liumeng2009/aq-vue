import store from '@/store';

import { hotModuleUnregisterModule } from '@/utils/helper/vuexHelper';
import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';

const NAME = 'app';
hotModuleUnregisterModule(NAME);
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class App extends VuexModule {
  private pageLoadingState = false;

  get getPageLoading() {
    return this.pageLoadingState;
  }

  @Mutation
  commitPageLoadingState(loading: boolean): void {
    this.pageLoadingState = loading;
  }

  @Action
  public async setPageLoadingAction(loading: boolean): Promise<void> {
    this.commitPageLoadingState(loading);
  }
}

export const appStore = getModule<App>(App);
