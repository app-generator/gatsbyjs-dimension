import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-rocket"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>GatsbyJS Web App</h1> 
                <p>Dimension - React / GatsbyJS Web App</p> 
                <p>
                <a href="https://appseed.us/apps/gatsbyjs/html5up-dimension">Get Code</a> {' '}
                </p>
                FEATURES:
                <p>
                Sitemap generator, FTP deploy Script, Free Email <a href="https://appseed.us/support">support</a>
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about-gatsbyjs')}}>GatsbyJS</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('appseed-app-generator')}}>AppSeed</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('resources')}}>Resources</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('support')}}>Support</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
