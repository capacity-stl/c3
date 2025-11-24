import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Icon } from '../Icon/Icon';
import { colorNames } from '../../props/color.props';

declare const meta: Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;
type WithIconStory = StoryObj<{
    icon: keyof typeof Icon.Glyph;
    color: (typeof colorNames)[number];
}>;
type SizesStory = StoryObj<{
    size: 'sm' | 'md' | 'lg' | 'xl';
    open: boolean;
}>;
type CustomStylesStory = StoryObj<{
    showCloseButton: boolean;
    title: string;
    description: string;
    icon: keyof typeof Icon.Glyph;
    iconColor: (typeof colorNames)[number];
    showIcon: boolean;
    showBorderHeader: boolean;
    showBorderFooter: boolean;
    closeOutside: boolean;
    fullScreen: boolean;
    bodyContent: string;
}>;
type ConfirmationModalStory = StoryObj<{
    showCloseButton: boolean;
    title: string;
    description: string;
    icon: keyof typeof Icon.Glyph;
    iconColor: (typeof colorNames)[number];
    cancelText: string;
    confirmText: string;
    buttonText: string;
}>;
type FullScreenStory = StoryObj<{
    fullScreen: boolean;
}>;
type NoCloseOutsideStory = StoryObj<{
    closeOutside: boolean;
}>;
export declare const Basic: Story;
export declare const WithIcon: WithIconStory;
export declare const Sizes: SizesStory;
export declare const AllOptions: CustomStylesStory;
export declare const ConfirmationModal: ConfirmationModalStory;
export declare const FullScreenModal: FullScreenStory;
export declare const NoCloseOutside: NoCloseOutsideStory;
