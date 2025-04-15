import type { ClassConstructor } from '../transformer'
import type { I18n } from './I18n'

export type I18nClassConstructor<T extends I18n> = ClassConstructor<T> & typeof I18n
