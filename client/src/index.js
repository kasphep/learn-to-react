import {rerenderEntireTree} from './render';
import * as fullState from "./redax/state";

rerenderEntireTree(fullState.state, fullState.addPost, fullState.updateNewPostText);