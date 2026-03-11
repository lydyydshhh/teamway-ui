import { TyAffix } from '@teamway-ui/components/affix'
import { TyAlert } from '@teamway-ui/components/alert'
import { TyAutocomplete } from '@teamway-ui/components/autocomplete'
import { TyAvatar, TyAvatarGroup } from '@teamway-ui/components/avatar'
import { TyBacktop } from '@teamway-ui/components/backtop'
import { TyBadge } from '@teamway-ui/components/badge'
import {
  TyBreadcrumb,
  TyBreadcrumbItem,
} from '@teamway-ui/components/breadcrumb'
import { TyButton, TyButtonGroup } from '@teamway-ui/components/button'
import { TyCalendar } from '@teamway-ui/components/calendar'
import { TyCard } from '@teamway-ui/components/card'
import { TyCarousel, TyCarouselItem } from '@teamway-ui/components/carousel'
import { TyCascader } from '@teamway-ui/components/cascader'
import { TyCascaderPanel } from '@teamway-ui/components/cascader-panel'
import { TyCheckTag } from '@teamway-ui/components/check-tag'
import {
  TyCheckbox,
  TyCheckboxButton,
  TyCheckboxGroup,
} from '@teamway-ui/components/checkbox'
import { TyCol } from '@teamway-ui/components/col'
import { TyCollapse, TyCollapseItem } from '@teamway-ui/components/collapse'
import { TyCollapseTransition } from '@teamway-ui/components/collapse-transition'
import { TyColorPickerPanel } from '@teamway-ui/components/color-picker-panel'
import { TyColorPicker } from '@teamway-ui/components/color-picker'
import { TyConfigProvider } from '@teamway-ui/components/config-provider'
import {
  TyAside,
  TyContainer,
  TyFooter,
  TyHeader,
  TyMain,
} from '@teamway-ui/components/container'
import { TyDatePicker } from '@teamway-ui/components/date-picker'
import { TyDatePickerPanel } from '@teamway-ui/components/date-picker-panel'
import {
  TyDescriptions,
  TyDescriptionsItem,
} from '@teamway-ui/components/descriptions'
import { TyDialog } from '@teamway-ui/components/dialog'
import { TyDivider } from '@teamway-ui/components/divider'
import { TyDrawer } from '@teamway-ui/components/drawer'
import {
  TyDropdown,
  TyDropdownItem,
  TyDropdownMenu,
} from '@teamway-ui/components/dropdown'
import { TyEmpty } from '@teamway-ui/components/empty'
import { TyForm, TyFormItem } from '@teamway-ui/components/form'
import { TyIcon } from '@teamway-ui/components/icon'
import { TyImage } from '@teamway-ui/components/image'
import { TyImageViewer } from '@teamway-ui/components/image-viewer'
import { TyInput } from '@teamway-ui/components/input'
import { TyInputNumber } from '@teamway-ui/components/input-number'
import { TyInputTag } from '@teamway-ui/components/input-tag'
import { TyLink } from '@teamway-ui/components/link'
import {
  TyMenu,
  TyMenuItem,
  TyMenuItemGroup,
  TySubMenu,
} from '@teamway-ui/components/menu'
import { TyPageHeader } from '@teamway-ui/components/page-header'
import { TyPagination } from '@teamway-ui/components/pagination'
import { TyPopconfirm } from '@teamway-ui/components/popconfirm'
import { TyPopover } from '@teamway-ui/components/popover'
import { TyPopper } from '@teamway-ui/components/popper'
import { TyProgress } from '@teamway-ui/components/progress'
import {
  TyRadio,
  TyRadioButton,
  TyRadioGroup,
} from '@teamway-ui/components/radio'
import { TyRate } from '@teamway-ui/components/rate'
import { TyResult } from '@teamway-ui/components/result'
import { TyRow } from '@teamway-ui/components/row'
import { TyScrollbar } from '@teamway-ui/components/scrollbar'
import {
  TyOption,
  TyOptionGroup,
  TySelect,
} from '@teamway-ui/components/select'
import { TySelectV2 } from '@teamway-ui/components/select-v2'
import { TySkeleton, TySkeletonItem } from '@teamway-ui/components/skeleton'
import { TySlider } from '@teamway-ui/components/slider'
import { TySpace } from '@teamway-ui/components/space'
import { TyStatistic } from '@teamway-ui/components/statistic'
import { TyCountdown } from '@teamway-ui/components/countdown'
import { TyNumberAnimation } from '@teamway-ui/components/number-animation'
import { TyGrid, TyGridItem } from '@teamway-ui/components/grid'
import { TyStep, TySteps } from '@teamway-ui/components/steps'
import { TySwitch } from '@teamway-ui/components/switch'
import { TyTable, TyTableColumn } from '@teamway-ui/components/table'
import { TyAutoResizer, TyTableV2 } from '@teamway-ui/components/table-v2'
import { TyTabPane, TyTabs } from '@teamway-ui/components/tabs'
import { TyTag } from '@teamway-ui/components/tag'
import { TyText } from '@teamway-ui/components/text'
import { TyTimePicker } from '@teamway-ui/components/time-picker'
import { TyTimeSelect } from '@teamway-ui/components/time-select'
import { TyTimeline, TyTimelineItem } from '@teamway-ui/components/timeline'
import { TyTooltip } from '@teamway-ui/components/tooltip'
import { TyTransfer } from '@teamway-ui/components/transfer'
import { TyTree } from '@teamway-ui/components/tree'
import { TyTreeSelect } from '@teamway-ui/components/tree-select'
import { TyTreeV2 } from '@teamway-ui/components/tree-v2'
import { TyUpload } from '@teamway-ui/components/upload'
import { TyWatermark } from '@teamway-ui/components/watermark'
import { TyTour, TyTourStep } from '@teamway-ui/components/tour'
import { TyAnchor, TyAnchorLink } from '@teamway-ui/components/anchor'
import { TySegmented } from '@teamway-ui/components/segmented'
import { TyMention } from '@teamway-ui/components/mention'
import { TySplitter, TySplitterPanel } from '@teamway-ui/components/splitter'

import type { Plugin } from 'vue'

export default [
  TyAffix,
  TyAlert,
  TyAutocomplete,
  TyAutoResizer,
  TyAvatar,
  TyAvatarGroup,
  TyBacktop,
  TyBadge,
  TyBreadcrumb,
  TyBreadcrumbItem,
  TyButton,
  TyButtonGroup,
  TyCalendar,
  TyCard,
  TyCarousel,
  TyCarouselItem,
  TyCascader,
  TyCascaderPanel,
  TyCheckTag,
  TyCheckbox,
  TyCheckboxButton,
  TyCheckboxGroup,
  TyCol,
  TyCollapse,
  TyCollapseItem,
  TyCollapseTransition,
  TyColorPickerPanel,
  TyColorPicker,
  TyConfigProvider,
  TyContainer,
  TyAside,
  TyFooter,
  TyHeader,
  TyMain,
  TyDatePicker,
  TyDatePickerPanel,
  TyDescriptions,
  TyDescriptionsItem,
  TyDialog,
  TyDivider,
  TyDrawer,
  TyDropdown,
  TyDropdownItem,
  TyDropdownMenu,
  TyEmpty,
  TyForm,
  TyFormItem,
  TyIcon,
  TyImage,
  TyImageViewer,
  TyInput,
  TyInputNumber,
  TyInputTag,
  TyLink,
  TyMenu,
  TyMenuItem,
  TyMenuItemGroup,
  TySubMenu,
  TyPageHeader,
  TyPagination,
  TyPopconfirm,
  TyPopover,
  TyPopper,
  TyProgress,
  TyRadio,
  TyRadioButton,
  TyRadioGroup,
  TyRate,
  TyResult,
  TyRow,
  TyScrollbar,
  TySelect,
  TyOption,
  TyOptionGroup,
  TySelectV2,
  TySkeleton,
  TySkeletonItem,
  TySlider,
  TySpace,
  TyStatistic,
  TyCountdown,
  TyNumberAnimation,
  TyGrid,
  TyGridItem,
  TySteps,
  TyStep,
  TySwitch,
  TyTable,
  TyTableColumn,
  TyTableV2,
  TyTabs,
  TyTabPane,
  TyTag,
  TyText,
  TyTimePicker,
  TyTimeSelect,
  TyTimeline,
  TyTimelineItem,
  TyTooltip,
  TyTransfer,
  TyTree,
  TyTreeSelect,
  TyTreeV2,
  TyUpload,
  TyWatermark,
  TyTour,
  TyTourStep,
  TyAnchor,
  TyAnchorLink,
  TySegmented,
  TyMention,
  TySplitter,
  TySplitterPanel,
] as Plugin[]
