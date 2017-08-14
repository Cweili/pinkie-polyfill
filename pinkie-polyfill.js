import pinkie from 'pinkie';

const root = window || global || this;

if (!root.Promise) {
  root.Promise = pinkie;
}

export default root.Promise;
