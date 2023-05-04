export function Component(id: number) {
    console.log('init: Component');
    return (target: Function) => {
        console.log('started: Component');
        target.prototype.id = id;
    }
}

export function Logger() {
    console.log('init: Logger');
    return (target: Function) => {
        console.log('started: Logger');
    }
}

export function Method(
    target: Object,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
) {
    console.log('init: Method - ' + propertyKey);
    const oldValue = propertyDescriptor.value;
    propertyDescriptor.value = function (...args: unknown[]) {
        if (typeof args[0] == 'number') {
            return args[0] * 10;
        } else {
            throw new Error(`wrong type in: ${propertyKey}`);
        }
    }
}

export function Prop(
    target: Object,
    propertyKey: string
) {
    console.log('init property: ' + propertyKey);

    let value: number;

    const getter = () => {
        console.log('GET');
        return value;
    }

    const setter = (newValue: number) => {
        console.log('SET');
        value = newValue;
    }

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}

export function Param(
    target: Object,
    propertyKey: string,
    index: number
) {
    console.log(target, propertyKey, index);
}