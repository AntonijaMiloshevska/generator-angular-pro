import app from 'main.module';
<% if (props.ui !== 'ionic') { -%>
import {IApplicationConfig} from 'main.constants';
<% } -%>
import {ILogger, LoggerService} from 'helpers/logger/logger';

/**
 * Displays the SPA shell.
 * The shell contains the shared parts of the application: header, footer, navigation...
 */
export class ShellController {

  currentLocale: ng.ILocaleService;
<% if (props.ui !== 'ionic') { -%>
  languages: string[];
  menuHidden: boolean;
<% } -%>

  private logger: ILogger;

  constructor(private $state: ng.ui.IStateService,
              $locale: ng.ILocaleService,
              private _: _.LoDashStatic,
<% if (props.ui !== 'ionic') { -%>
              config: IApplicationConfig,
<% } -%>
              logger: LoggerService) {

    this.currentLocale = $locale;
    this.logger = logger.getLogger('shell');
<% if (props.ui !== 'ionic') { -%>
    this.languages = config.supportedLanguages;
    this.menuHidden = true;
<% } -%>

    this.logger.log('init');
  }

<% if (props.ui !== 'ionic') { -%>
  /**
   * Toggles navigation menu visibility on mobile platforms.
   */
  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

<% } -%>
  /**
   * Checks if the specified name is contained in the current navigation state.
   * @param {string} name The state name to check.
   * @return {boolean} True if the specified name is contained in the current navigation state.
   */
  stateContains(name: string): boolean {
    return this._.startsWith(this.$state.current.name, name);
  }

}

app.controller('shellController', ShellController);
