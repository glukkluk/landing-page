import { hero } from "./blocks/hero/hero";
import { features } from "./blocks/features/features";
import { testimonials } from "./blocks/testimonials/testimonials";
import { contacts } from "./blocks/contacts/contacts";

const renderers = { hero, features, testimonials, contacts };

export function renderBlocks(blocks) {
    return blocks
        .map((block) => {
            const render = renderers[block.type];

            if (!render) {
                console.warn(`${block.type} does not exists`);
                return "";
            }

            return render(block);
        })
        .join("");
}
