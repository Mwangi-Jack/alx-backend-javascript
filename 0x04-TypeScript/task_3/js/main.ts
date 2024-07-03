/// <reference path="./crud.d.ts" />

import { RowId, RowElement } from "./interface";
import * as CRUD from './crud'

const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva'
}

const newRowId: RowId = CRUD.insertRow(row);
const updateRow: RowElement = CRUD.updateRow(newRowId, row)
