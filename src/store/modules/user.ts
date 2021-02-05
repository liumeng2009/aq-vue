import store from '@/store';
import { GetUserInfoByUserIdModel } from '@/api/sys/model/userModel';

import { hotModuleUnregisterModule } from "@/utils/helper/vuexHelper";
import { getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";

function fixType<T>() {
  return {} as T;
}

export type UserInfo = Omit<GetUserInfoByUserIdModel, 'roles'>;

const NAME: string = 'user';
hotModuleUnregisterModule(NAME);
@Module({ namespaced: true, name: NAME, dynamic: true, store })
class User extends VuexModule {
  private userInfoState: UserInfo | null = null;
  private tokenState = '';

  get getUserInfoState(): UserInfo {
    return this.userInfoState || fixType<UserInfo>() || {};
  }

  get getTokenState(): string {
    return this.tokenState;
  }

  @Mutation
  commitUserInfoState(info: UserInfo): void {
    this.userInfoState = info;
  }

  @Mutation
  commitTokenState(info: string): void {
    this.tokenState = info;
  }
}

export const userStore = getModule<User>(User);