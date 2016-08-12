import 'native-promise-only'
import page from 'page'
import './timeago-fix'
import timeago from 'democracyos-timeago'
import config from '../../config/config'
import 'lib/stores/comments/comments'

import '../../translations/translations'

/**
 * Enable client-side debug messages
 */

import '../../debug'

/**
 * Load currentUser
 */

import '../../user/user'

/**
 * Mount applications.
 */

// import '../../analytics'
// import '../../body-classes/body'
// import '../../error-pages/error-pages'
// import '../../site/header/header'
// import '../../site/sidebar/sidebar'
// import '../../site/help/help'
// import '../../site/signin/signin'
// import '../../site/signup/signup'
// import '../../site/forgot/forgot'
// import '../../site/notifications-page/notifications'
// import '../../site/auth-facebook/auth-facebook'
// import '../../site/logout/logout'
// import '../../site/topic/topic-react'
import '../../site/router/router'
// import '../../site/newsfeed/newsfeed'
// import '../../site/homepage/homepage'
// import '../../404/404'

/**
 * Init `timeago` component with parameter locale
 */

timeago('.ago', { lang: config.locale, interval: 1000 })

/**
 * Init page.js
 */

page()

if (config.googleAnalyticsTrackingId) {
  require('democracyos-ga')(config.googleAnalyticsTrackingId)
}
