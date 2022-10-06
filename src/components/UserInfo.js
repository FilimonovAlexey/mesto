export class UserInfo {
  constructor(profileName, profileJob, profileAvatar) {
    this._profileName = profileName;
    this._profileJob = profileJob;
    this.profileAvatar = profileAvatar;
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent
    }
  }

  setUserInfo(data) {
    this._profileName.textContent = data.profileName
    this._profileJob.textContent = data.profileJob
  }
  setUserAvatar(data) {
    this.profileAvatar.src = data.profileAvatar
  }

}



