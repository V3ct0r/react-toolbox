import React from 'react';
import { History } from 'react-router';
import { List, ListItem } from 'react-toolbox';
import style from './drawer_components.scss';
import components from '../modules/components';

const MainDrawer = React.createClass({
  mixins: [History],

  propTypes: {
    active: React.PropTypes.bool
  },

  renderDrawerItems () {
    return Object.keys(components).map((key) => {
      const ToolboxComponent = components[key];
      const to = this.context.history.createHref(ToolboxComponent.path);
      let className = style.item;
      if (this.context.history.isActive(ToolboxComponent.path)) {
        className += ` ${style.active}`;
      }

      return (
        <ListItem
          key={key}
          caption={ToolboxComponent.name}
          className={className}
          selectable
          to={to}
        />
      );
    });
  },

  render () {
    let className = style.root;
    if (this.props.active) className += ` ${style.active_drawer}`;

    return (
      <aside className={className}>
        <List className={style.list} selectable>
          { this.renderDrawerItems() }
        </List>
        <footer className={style.footer}>
          <span>React Toolbox ©</span>
          <span>
            <a href=''>Privacy</a> & <a href=''>Terms</a>
          </span>
        </footer>
      </aside>
    );
  }
});

export default MainDrawer;
