import React, { Fragment } from 'react';
import { Linkedin } from 'react-feather';
import * as Icon from 'react-feather';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import { useFooter } from '@magento/peregrine/lib/talons/Footer/useFooter';

import Logo from '@magento/venia-ui/lib/components/Logo';
import { useStyle } from '@magento/venia-ui/lib/classify';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/Footer/footer.module.css'
import { DEFAULT_LINKS, LOREM_IPSUM } from "@magento/venia-ui/lib/components/Footer/sampleData";
import {footerLinkData} from './footerSampleData';
import {cloneLinks} from './footerUtils'
import updateClasses from './footer.module.css'



const Footer = props => {

    const { links } = props;

    let cloneLinkData = cloneLinks(footerLinkData)

    const classes = useStyle(defaultClasses, props.classes);

    const talonProps = useFooter();

    const { copyrightText } = talonProps;

    const linkGroups = Array.from(cloneLinkData, ([groupKey, linkProps]) => {

        const linkElements = Array.from(linkProps, ([text, pathInfo]) => {
            
            let path = pathInfo;
            let Component = Fragment;

            const itemKey = `text: ${text} path:${path}`;
            const child = path ? (
                <Link data-cy="Footer-link" className={classes.link} to={path}>
                    <FormattedMessage id={text} defaultMessage={text} />
                </Link>
            ) : (
                <span data-cy="Footer-label" className={`${classes.label} ${updateClasses.updatelabel}`}>
                    <FormattedMessage id={text} defaultMessage={text} />
                </span>
            );

            return (
                <Component key={itemKey}>
                    <li className={classes.linkItem}>{child}</li>
                </Component>
            );
        });

        return (
            <ul key={groupKey} className={classes.linkGroup}>
                {linkElements}
            </ul>
        );
    });

    return (
        <footer data-cy="Footer-root" className={`${classes.root} ${updateClasses.updateroot}`}>
            <div className={`${classes.links} ${updateClasses.updatelinks}`}>
                {linkGroups}
            </div>
            <hr/>
            <div className={updateClasses.footerLogo}>
                <a className={updateClasses.logoGrid}>
                    <Linkedin size={35} />
                </a>


                <select className={updateClasses.boxBoundary} id="languages" name="languages">
                    <option value="en">English</option>
                    <option value="zh">Chinese</option>
                    <option value="ja">Japanese</option>
                </select>

            </div>
        </footer>
    );
};

export default Footer;

Footer.defaultProps = {
    links: DEFAULT_LINKS
};

Footer.propTypes = {
    classes: shape({
        root: string
    })
};
