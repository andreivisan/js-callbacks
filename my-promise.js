class MyPromise {
    constructor(executor) {
        console.log('MyPromise constructor has been called');
        this.state = 'pending';
        // this is the value of the promsie
        this.value = undefined;
        this.handlers = [];
        this.catchers = [];

        const resolve = (value) => {
            console.log('MyPromise with state %s is resolved', this.state);
            if (this.state === 'pending') {
                this.state = 'resolved';
                this.value = value;
                this.handlers.forEach(handler => handler(value));
            }
        };

        const reject = (error) => {
            console.log('MyPromise with state %s is rejected', this.state)
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.value = error;
                this.catchers.forEach(catcher => catcher(error));
            }
        }
        
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(handler) {
        if (this.state === 'fulfilled') {
            console.log('state is fulfilled');
            handler(this.value);
        } else if (this.state === 'pending') {
            console.log('state is pending, pushing handler');
            this.handlers.push(handler);
        }
        return this;
    }

    catch(catcher) {
        if (this.state ==='rejected') {
            console.log('state is rejected');
            catcher(this.error);
        } else if (this.state === 'pending') {
            console.log('state is pending, pushing catcher');
            this.catchers.push(catcher);
        }
        return this;
    }
}