import Vue from 'vue';

import AppButton from '../components/ui/AppButton';
import AppControlInput from '../components/ui/AppControlInput';
import PostList from '../components/posts/PostList';

// register global/shared/common components
Vue.component('app-button', AppButton);
Vue.component('app-control-input', AppControlInput);
Vue.component('app-post-list', PostList);
