import React from 'react';

import {
  Sun as SunIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  QuestionCircle as QuestionCircleIcon,
  ExclamationCircle as ExclamationCircleIcon,
  Plus as PlusIcon,
  ArrowRight as ArrowRightIcon,
  List as ListIcon,
} from '../components/Icon';

export default {
  title: 'Example/Icon',
};

export const Sun = () => {
  return <SunIcon csx={{ width: '5%', height: '5%' }} />;
};

export const CheckCircle = () => {
  return <CheckCircleIcon csx={{ width: '5%', height: '5%' }} />;
};

export const XCircle = () => {
  return <XCircleIcon csx={{ width: '5%', height: '5%' }} />;
};

export const QuestionCircle = () => {
  return <QuestionCircleIcon csx={{ width: '5%', height: '5%' }} />;
};

export const ExclamationCircle = () => {
  return <ExclamationCircleIcon csx={{ width: '5%', height: '5%' }} />;
};

export const Plus = () => {
  return <PlusIcon csx={{ width: '5%', height: '5%' }} />;
};

export const ArrowRight = () => {
  return <ArrowRightIcon csx={{ width: '5%', height: '5%' }} />;
};

export const List = () => {
  return <ListIcon csx={{ width: '5%', height: '5%' }} />;
};
