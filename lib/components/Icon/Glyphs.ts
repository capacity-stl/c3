import React from 'react'

import Action from './glyphs/Action'
import Add from './glyphs/Add'
import Alert from './glyphs/Alert'
import Analytics from './glyphs/Analytics'
import AppAction from './glyphs/AppAction'
import Apps from './glyphs/Apps'
import AppStore from './glyphs/AppStore'
import Archive from './glyphs/Archive'
import ArrowLeft from './glyphs/ArrowLeft'
import ArrowRight from './glyphs/ArrowRight'
import Article from './glyphs/Article'
import ArticleNew from './glyphs/ArticleNew'
import ArtificialIntelligence from './glyphs/ArtificialIntelligence'
import Ascending from './glyphs/Ascending'
import Automations from './glyphs/Automations'
import AutomationsLined from './glyphs/AutomationsLined'
import Bold from './glyphs/Bold'
import Boolean from './glyphs/Boolean'
import BoundingBox from './glyphs/BoundingBox'
import Broadcast from './glyphs/Broadcast'
import Bug from './glyphs/Bug'
import Builder from './glyphs/Builder'
import Building from './glyphs/Building'
import BulletList from './glyphs/BulletList'
import Bullhorn from './glyphs/Bullhorn'
import Calendar from './glyphs/Calendar'
import Camera from './glyphs/Camera'
import Cancel from './glyphs/Cancel'
import CapacityDB from './glyphs/CapacityDB'
import CapacityLogoOutline from './glyphs/CapacityLogoOutline'
import CardView from './glyphs/CardView'
import {
  CaretUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretBoxedUp,
  CaretBoxedDown,
  CaretBoxedLeft,
  CaretBoxedRight,
} from './glyphs/Caret'
import Carousel from './glyphs/Carousel'
import Check from './glyphs/Check'
import ChevronLeft from './glyphs/ChevronLeft'
import ChevronRight from './glyphs/ChevronRight'
import ClassicExchange from './glyphs/ClassicExchange'
import Clock from './glyphs/Clock'
import Close from './glyphs/Close'
import CloudDrive from './glyphs/CloudDrive'
import Cobrowse from './glyphs/Cobrowse'
import Code from './glyphs/Code'
import ColumnView from './glyphs/ColumnView'
import Compass from './glyphs/Compass'
import Concierge from './glyphs/Concierge'
import Contacts from './glyphs/Contacts'
import Copy from './glyphs/Copy'
import CopyAndFill from './glyphs/CopyAndFill'
import CreateExchange from './glyphs/CreateExchange'
import Delete from './glyphs/Delete'
import Descending from './glyphs/Descending'
import Dialogue from './glyphs/Dialogue'
import DocManager from './glyphs/DocManager'
import Document from './glyphs/Document'
import Done from './glyphs/Done'
import Download from './glyphs/Download'
import Dropdown from './glyphs/Dropdown'
import Duplicate from './glyphs/Duplicate'
import Edit from './glyphs/Edit'
import EmojiPicker from './glyphs/EmojiPicker'
import End from './glyphs/End'
import EndMessage from './glyphs/EndMessage'
import { Envelope, EnvelopeStack } from './glyphs/Envelope'
import Expired from './glyphs/Expired'
import Facebook from './glyphs/Facebook'
import Instagram from './glyphs/Instagram'
import FileUpload from './glyphs/FileUpload'
import Filter from './glyphs/Filter'
import FilterKB from './glyphs/FilterKB'
import FindAndReplace from './glyphs/FindAndReplace'
import Fire from './glyphs/Fire'
import Flag from './glyphs/Flag'
import Folder from './glyphs/Folder'
import Form from './glyphs/Form'
import Forward from './glyphs/Forward'
import GearLined from './glyphs/GearLined'
import GearSolid from './glyphs/GearSolid'
import Gift from './glyphs/Gift'
import Glasses from './glyphs/Glasses'
import GuidedConversation from './glyphs/GuidedConversation'
import Hamburger from './glyphs/Hamburger'
import HangUp from './glyphs/HangUp'
import Hashtag from './glyphs/Hashtag'
import Help from './glyphs/Help'
import Hidden from './glyphs/Hidden'
import Home from './glyphs/Home'
import Inbound from './glyphs/Inbound'
import Info from './glyphs/Info'
import InfoSolid from './glyphs/InfoSolid'
import Italics from './glyphs/Italics'
import KnowledgeBase from './glyphs/KnowledgeBase'
import LifeSaver from './glyphs/LifeSaver'
import Lightbulb from './glyphs/Lightbulb'
import Linked from './glyphs/Linked'
import ListOfObjects from './glyphs/ListOfObjects'
import ListView from './glyphs/ListView'
import Livechat from './glyphs/Livechat'
import LivechatNav from './glyphs/LivechatNav'
import Livepage from './glyphs/Livepage'
import Livesheet from './glyphs/Livesheet'
import Location from './glyphs/Location'
import Lock from './glyphs/Lock'
import LogOut from './glyphs/LogOut'
import Loop from './glyphs/Loop'
import {
  MagnifyingGlass,
  MagnifyingGlassSpark,
  MagnifyingGlassWaveform,
} from './glyphs/MagnifyingGlass'
import MapToExchange from './glyphs/MapToExchange'
import Maximize from './glyphs/Maximize'
import { MediaPause, MediaPlay } from './glyphs/MediaControls'
import Mine from './glyphs/Mine'
import Minimize from './glyphs/Minimize'
import Minus from './glyphs/Minus'
import MissedLiveChat from './glyphs/MissedLiveChat'
import { More, MoreHorizontal, MoreHorizontalLight } from './glyphs/More'
import MultiplePaths from './glyphs/MultiplePaths'
import NewFolder from './glyphs/NewFolder'
import Notepad from './glyphs/Notepad'
import NumberedList from './glyphs/NumberedList'
import Open from './glyphs/Open'
import Paperclip from './glyphs/Paperclip'
import Paste from './glyphs/Paste'
import Pencil from './glyphs/Pencil'
import Permissions from './glyphs/Permissions'
import PersonAdd from './glyphs/PersonAdd'
import { Person, PersonWithClock } from './glyphs/Person'
import Phone from './glyphs/Phone'
import Photo from './glyphs/Photo'
import Plus from './glyphs/Plus'
import PowerPoint from './glyphs/PowerPoint'
import PriorityHigh from './glyphs/PriorityHigh'
import PriorityLow from './glyphs/PriorityLow'
import PriorityMedium from './glyphs/PriorityMedium'
import PriorityTrivial from './glyphs/PriorityTrivial'
import Privacy from './glyphs/Privacy'
import QRCode from './glyphs/QRCode'
import Quote from './glyphs/Quote'
import Redact from './glyphs/Redact'
import Refresh from './glyphs/Refresh'
import ResetZoom from './glyphs/ResetZoom'
import Respond from './glyphs/Respond'
import Search from './glyphs/Search'
import SessionReplay from './glyphs/SessionReplay'
import Site from './glyphs/Site'
import SkipTo from './glyphs/SkipTo'
import Sort from './glyphs/Sort'
import Spinner from './glyphs/Spinner'
import Splitter from './glyphs/Splitter'
import Star from './glyphs/Star'
import StarFilled from './glyphs/StarFilled'
import Start from './glyphs/Start'
import Surveys from './glyphs/Surveys'
import Table from './glyphs/Table'
import TableView from './glyphs/TableView'
import Task from './glyphs/Task'
import Team from './glyphs/Team'
import Template from './glyphs/Template'
import Text from './glyphs/Text'
import ThumbDown from './glyphs/ThumbDown'
import ThumbUp from './glyphs/ThumbUp'
import Ticket from './glyphs/Ticket'
import TilesView from './glyphs/TilesView'
import Transfer from './glyphs/Transfer'
import Unlinked from './glyphs/Unlinked'
import Upgrade from './glyphs/Upgrade'
import Upload from './glyphs/Upload'
import VariableList from './glyphs/VariableList'
import Video from './glyphs/Video'
import Visibility from './glyphs/Visibility'
import VolumeHigh from './glyphs/VolumeHigh'
import Workflow from './glyphs/Workflow'
import WorkflowsNav from './glyphs/WorkflowsNav'

export const Glyphs = {
  Action,
  Add,
  Alert,
  Analytics,
  AppAction,
  Apps,
  AppStore,
  Archive,
  ArrowLeft,
  ArrowRight,
  Article,
  ArticleNew,
  ArtificialIntelligence,
  Ascending,
  Automations,
  AutomationsLined,
  Bold,
  Boolean,
  BoundingBox,
  Broadcast,
  Bug,
  Builder,
  Building,
  BulletList,
  Bullhorn,
  Calendar,
  Camera,
  Cancel,
  CapacityDB,
  CapacityLogoOutline,
  CardView,
  CaretBoxedDown,
  CaretBoxedLeft,
  CaretBoxedRight,
  CaretBoxedUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
  Carousel,
  Check,
  ChevronLeft,
  ChevronRight,
  ClassicExchange,
  Clock,
  Close,
  CloudDrive,
  Cobrowse,
  Code,
  ColumnView,
  Compass,
  Concierge,
  Contacts,
  Copy,
  CopyAndFill,
  CreateExchange,
  Delete,
  Descending,
  Dialogue,
  DocManager,
  Document,
  Done,
  Download,
  Dropdown,
  Duplicate,
  Edit,
  EmojiPicker,
  End,
  EndMessage,
  Envelope,
  EnvelopeStack,
  Expired,
  Facebook,
  FileUpload,
  Filter,
  FilterKB,
  FindAndReplace,
  Fire,
  Flag,
  Folder,
  Form,
  Forward,
  GearLined,
  GearSolid,
  Gift,
  Glasses,
  GuidedConversation,
  Hamburger,
  HangUp,
  Hashtag,
  Help,
  Hidden,
  Home,
  Inbound,
  Info,
  InfoSolid,
  Instagram,
  Italics,
  KnowledgeBase,
  LifeSaver,
  Lightbulb,
  Linked,
  ListOfObjects,
  ListView,
  Livechat,
  LivechatNav,
  Livepage,
  Livesheet,
  Location,
  Lock,
  LogOut,
  Loop,
  MagnifyingGlass,
  MagnifyingGlassSpark,
  MagnifyingGlassWaveform,
  MapToExchange,
  Maximize,
  MediaPause,
  MediaPlay,
  Mine,
  Minimize,
  Minus,
  MissedLiveChat,
  More,
  MoreHorizontal,
  MoreHorizontalLight,
  MultiplePaths,
  NewFolder,
  Notepad,
  NumberedList,
  Open,
  Paperclip,
  Paste,
  Pencil,
  Permissions,
  Person,
  PersonAdd,
  PersonWithClock,
  Phone,
  Photo,
  Plus,
  PowerPoint,
  PriorityHigh,
  PriorityLow,
  PriorityMedium,
  PriorityTrivial,
  Privacy,
  QRCode,
  Quote,
  Redact,
  Refresh,
  ResetZoom,
  Respond,
  Search,
  SessionReplay,
  Site,
  SkipTo,
  Sort,
  Spinner,
  Splitter,
  Star,
  StarFilled,
  Start,
  Surveys,
  Table,
  TableView,
  Task,
  Team,
  Template,
  Text,
  ThumbDown,
  ThumbUp,
  Ticket,
  TilesView,
  Transfer,
  Unlinked,
  Upgrade,
  Upload,
  VariableList,
  Video,
  Visibility,
  VolumeHigh,
  Workflow,
  WorkflowsNav,
} as { [key: string]: () => React.JSX.Element }

export enum Icons {
  Action = 'Action',
  Add = 'Add',
  Alert = 'Alert',
  Analytics = 'Analytics',
  AppAction = 'AppAction',
  Apps = 'Apps',
  AppStore = 'AppStore',
  Archive = 'Archive',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  Article = 'Article',
  ArticleNew = 'ArticleNew',
  ArtificialIntelligence = 'ArtificialIntelligence',
  Ascending = 'Ascending',
  Automations = 'Automations',
  AutomationsLined = 'AutomationsLined',
  Bold = 'Bold',
  Boolean = 'Boolean',
  BoundingBox = 'BoundingBox',
  Broadcast = 'Broadcast',
  Bug = 'Bug',
  Builder = 'Builder',
  Building = 'Building',
  BulletList = 'BulletList',
  Bullhorn = 'Bullhorn',
  Calendar = 'Calendar',
  Camera = 'Camera',
  Cancel = 'Cancel',
  CapacityDB = 'CapacityDB',
  CapacityLogoOutline = 'CapacityLogoOutline',
  CardView = 'CardView',
  CaretBoxedDown = 'CaretBoxedDown',
  CaretBoxedLeft = 'CaretBoxedLeft',
  CaretBoxedRight = 'CaretBoxedRight',
  CaretBoxedUp = 'CaretBoxedUp',
  CaretDown = 'CaretDown',
  CaretLeft = 'CaretLeft',
  CaretRight = 'CaretRight',
  CaretUp = 'CaretUp',
  Carousel = 'Carousel',
  Check = 'Check',
  ChevronLeft = 'ChevronLeft',
  ChevronRight = 'ChevronRight',
  ClassicExchange = 'ClassicExchange',
  Clock = 'Clock',
  Close = 'Close',
  CloudDrive = 'CloudDrive',
  Cobrowse = 'Cobrowse',
  Code = 'Code',
  ColumnView = 'ColumnView',
  Compass = 'Compass',
  Concierge = 'Concierge',
  Contacts = 'Contacts',
  Copy = 'Copy',
  CopyAndFill = 'CopyAndFill',
  CreateExchange = 'CreateExchange',
  Delete = 'Delete',
  Descending = 'Descending',
  Dialogue = 'Dialogue',
  DocManager = 'DocManager',
  Document = 'Document',
  Done = 'Done',
  Download = 'Download',
  Dropdown = 'Dropdown',
  Duplicate = 'Duplicate',
  Edit = 'Edit',
  EmojiPicker = 'EmojiPicker',
  End = 'End',
  EndMessage = 'EndMessage',
  Envelope = 'Envelope',
  EnvelopeStack = 'EnvelopeStack',
  Expired = 'Expired',
  Facebook = 'Facebook',
  FileUpload = 'FileUpload',
  Filter = 'Filter',
  FilterKB = 'FilterKB',
  FindAndReplace = 'FindAndReplace',
  Fire = 'Fire',
  Flag = 'Flag',
  Folder = 'Folder',
  Form = 'Form',
  Forward = 'Forward',
  GearLined = 'GearLined',
  GearSolid = 'GearSolid',
  Gift = 'Gift',
  Glasses = 'Glasses',
  GuidedConversation = 'GuidedConversation',
  Hamburger = 'Hamburger',
  HangUp = 'HangUp',
  Hashtag = 'Hashtag',
  Help = 'Help',
  Hidden = 'Hidden',
  Home = 'Home',
  Inbound = 'Inbound',
  Info = 'Info',
  InfoSolid = 'InfoSolid',
  Instagram = 'Instagram',
  Italics = 'Italics',
  KnowledgeBase = 'KnowledgeBase',
  LifeSaver = 'LifeSaver',
  Lightbulb = 'Lightbulb',
  Linked = 'Linked',
  ListOfObjects = 'ListOfObjects',
  ListView = 'ListView',
  Livechat = 'Livechat',
  LivechatNav = 'LivechatNav',
  Livepage = 'Livepage',
  Livesheet = 'Livesheet',
  Location = 'Location',
  Lock = 'Lock',
  LogOut = 'LogOut',
  Loop = 'Loop',
  MagnifyingGlass = 'MagnifyingGlass',
  MagnifyingGlassSpark = 'MagnifyingGlassSpark',
  MagnifyingGlassWaveform = 'MagnifyingGlassWaveform',
  MapToExchange = 'MapToExchange',
  Maximize = 'Maximize',
  MediaPause = 'MediaPause',
  MediaPlay = 'MediaPlay',
  Mine = 'Mine',
  Minimize = 'Minimize',
  Minus = 'Minus',
  MissedLiveChat = 'MissedLiveChat',
  More = 'More',
  MoreHorizontal = 'MoreHorizontal',
  MoreHorizontalLight = 'MoreHorizontalLight',
  MultiplePaths = 'MultiplePaths',
  NewFolder = 'NewFolder',
  Notepad = 'Notepad',
  NumberedList = 'NumberedList',
  Open = 'Open',
  Paperclip = 'Paperclip',
  Paste = 'Paste',
  Pencil = 'Pencil',
  Permissions = 'Permissions',
  Person = 'Person',
  PersonAdd = 'PersonAdd',
  PersonWithClock = 'PersonWithClock',
  Phone = 'Phone',
  Photo = 'Photo',
  Plus = 'Plus',
  PowerPoint = 'PowerPoint',
  PriorityHigh = 'PriorityHigh',
  PriorityLow = 'PriorityLow',
  PriorityMedium = 'PriorityMedium',
  PriorityTrivial = 'PriorityTrivial',
  Privacy = 'Privacy',
  QRCode = 'QRCode',
  Quote = 'Quote',
  Redact = 'Redact',
  Refresh = 'Refresh',
  ResetZoom = 'ResetZoom',
  Respond = 'Respond',
  Search = 'Search',
  SessionReplay = 'SessionReplay',
  Site = 'Site',
  SkipTo = 'SkipTo',
  Sort = 'Sort',
  Spinner = 'Spinner',
  Splitter = 'Splitter',
  Star = 'Star',
  StarFilled = 'StarFilled',
  Start = 'Start',
  Surveys = 'Surveys',
  Table = 'Table',
  TableView = 'TableView',
  Task = 'Task',
  Team = 'Team',
  Template = 'Template',
  Text = 'Text',
  ThumbDown = 'ThumbDown',
  ThumbUp = 'ThumbUp',
  Ticket = 'Ticket',
  TilesView = 'TilesView',
  Transfer = 'Transfer',
  Unlinked = 'Unlinked',
  Upgrade = 'Upgrade',
  Upload = 'Upload',
  VariableList = 'VariableList',
  Video = 'Video',
  Visibility = 'Visibility',
  VolumeHigh = 'VolumeHigh',
  Workflow = 'Workflow',
  WorkflowsNav = 'WorkflowsNav',
}
