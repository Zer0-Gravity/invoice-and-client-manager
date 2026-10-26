import {
    cellSelectionFeature,
    rowSelectionFeature,
    tableFeatures,
} from "@tanstack/react-table";

export const features = tableFeatures({
    rowSelectionFeature,
    cellSelectionFeature,
});
