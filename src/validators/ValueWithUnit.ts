import { TriplewiseValidator } from "../triplewise-validator";
import { Triple } from "../triple";

export class ValueWithUnit extends TriplewiseValidator {
    validate(triple: Triple) {
        // FIXME WIP
        return [];
    }

    hasOboPrefix(n: string): boolean {
        return n.startsWith('http://purl.obolibrary.org/obo/');
    }
}