import { Meta, StoryObj } from '@storybook/react';
import { CardList } from './CardList';
import { Icon } from '../Icon/Icon';
import { ListItemType } from './CardList.props';

interface InteractionType extends ListItemType {
    id: number;
    title: string;
    description: string;
    datetime: string;
    reference?: string;
    icon?: keyof typeof Icon.Glyph;
    iconColor?: string;
    status?: string;
    user?: {
        imageUrl: string;
        initials: string[2];
        color?: string;
    };
}
declare const meta: Meta<typeof CardList<InteractionType>>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CardListDefault: Story;
export declare const CardListWithDefaultSelection: Story;
export declare const CardListSingleDefaultSelection: Story;
export declare const CardListEmpty: Story;
