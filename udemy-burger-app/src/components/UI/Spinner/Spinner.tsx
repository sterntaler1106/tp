import * as React from 'react';
import * as classes from './Spinner.css';

interface SpinnerProps {
}

const spinner = (props: SpinnerProps) => (
    <div className={classes.Loader}>Loading...</div>
);

export default spinner;