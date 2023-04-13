import { Logger, ISettingsParam, ILogObj } from 'tslog';

const loggerSettings = {
    displayInstanceName: false,
    displayLoggerName: false,
    displayFilePath: 'hidden',
    displayFunctionName: false
};

export class LoggerService {
    private logger: Logger<ILogObj>;

    constructor() {
        this.logger = new Logger<ILogObj>(loggerSettings as ISettingsParam<ILogObj>);
    }

    log(...args: unknown[]) {
        this.logger.info(...args);
    }

    error(...args: unknown[]) {
        // send error to sentry / rollbar
        this.logger.error(...args);
    }

    warn(...args: unknown[]) {
        this.logger.warn(...args);
    }
}