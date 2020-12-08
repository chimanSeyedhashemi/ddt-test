import React from 'react';
import { History } from "history";

export interface IBaseProps {}

export abstract class BaseComponent<p extends IBaseProps, S = {}, SS = any> extends React.Component<p, S, SS> {

    async onApplogout(history: History) {
        history.push('/login');
    }

}