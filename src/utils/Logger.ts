type LogValue = string | number | object | unknown;

class Logger {
	private formatKey(value: LogValue): string {
		if (value && typeof value === "object") {
			return `${value.constructor.name}:`;
		}

		if (typeof value === "function") {
			return `${value.name}:`;
		}

		return `${String(value)}:`;
	}

	public log(value: LogValue): void {
		console.log(this.formatKey(value), value);
	}

	public error(value: LogValue): void {
		console.error(this.formatKey(value), value);
	}

	public info(value: LogValue): void {
		console.info(this.formatKey(value), value);
	}
}

export const logger = new Logger();
