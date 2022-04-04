<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <p class="mt-2 text-xl font-semibold text-gray-800">
          A list of all the OKR.
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          class="
            inline-flex
            items-center
            justify-center
            rounded-md
            border border-transparent
            bg-indigo-600
            px-4
            py-2
            text-sm
            font-medium
            text-white
            shadow-sm
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:ring-offset-2
            sm:w-auto
          "
          @click="open = true"
        >
          Add Okr
        </button>
        <TransitionRoot as="template" :show="open">
          <Dialog
            as="div"
            class="fixed z-10 inset-0 overflow-y-auto"
            @close="open = false"
          >
            <div
              class="
                flex
                items-end
                justify-center
                min-h-screen
                pt-4
                px-4
                pb-20
                text-center
                sm:block sm:p-0
              "
            >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <DialogOverlay
                  class="
                    fixed
                    inset-0
                    bg-gray-500 bg-opacity-75
                    transition-opacity
                  "
                />
              </TransitionChild>

              <!-- This element is to trick the browser into centering the modal contents. -->
              <span
                class="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
                >&#8203;</span
              >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div
                  class="
                    relative
                    inline-block
                    align-bottom
                    bg-white
                    rounded-lg
                    px-4
                    pt-5
                    pb-4
                    text-left
                    overflow-hidden
                    shadow-xl
                    transform
                    transition-all
                    sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6
                  "
                >
                  <div class="sm:flex sm:items-start">
                    <div
                      class="
                        mx-auto
                        flex-shrink-0 flex
                        items-center
                        justify-center
                        h-12
                        w-12
                        rounded-full
                        bg-red-100
                        sm:mx-0 sm:h-10 sm:w-10
                      "
                    >
                      <FolderAddIcon
                        class="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-lg leading-6 font-medium text-gray-900"
                      >
                        Create new Okr
                      </DialogTitle>
                      <div class="mt-2">
                        <textarea
                          type="text"
                          class="
                            text-sm text-gray-700 text-left
                            font-sans
                            w-96
                            h-24
                          "
                          v-model="newOkr"
                          placeholder="Enter new OKR"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      class="
                        w-full
                        inline-flex
                        justify-center
                        rounded-md
                        border border-transparent
                        shadow-sm
                        px-4
                        py-2
                        bg-red-600
                        text-base
                        font-medium
                        text-white
                        hover:bg-red-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-red-500
                        sm:ml-3 sm:w-auto sm:text-sm
                      "
                      @click="open = false"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      class="
                        mt-3
                        w-full
                        inline-flex
                        justify-center
                        rounded-md
                        border border-gray-300
                        shadow-sm
                        px-4
                        py-2
                        bg-white
                        text-base
                        font-medium
                        text-gray-700
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-500
                        sm:mt-0 sm:w-auto sm:text-sm
                      "
                      @click="open = false"
                      ref="cancelButtonRef"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </TransitionChild>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="
              overflow-hidden
              shadow
              ring-1 ring-black ring-opacity-5
              md:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th class="text-left text-sm font-semibold text-gray-900">
                    Id
                  </th>
                  <th class="text-center text-sm font-semibold text-gray-900">
                    Okr
                  </th>
                  <th class="text-center text-sm font-semibold text-gray-900">
                    Edit
                  </th>
                  <th class="text-center text-sm font-semibold text-gray-900">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="okr in okrs" :key="okr._id">
                  <td
                    class="
                      whitespace-nowrap
                      py-4
                      pl-4
                      pr-3
                      text-sm
                      font-medium
                      text-gray-900
                      sm:pl-6
                    "
                  >
                    {{ okr._id }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ okr.name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <button>Edit</button>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <button>Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OkrApi from "../Api/OkrApi";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { FolderAddIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    FolderAddIcon,
  },
  async mounted() {
    let result = await OkrApi.get();
    this.okrs = result.data;
  },
  data() {
    return {
      okrs: [],
      open: false,
    };
  },
  methods: {
    add: () => {
      OkrApi.create({
        name: this.newOkr,
      });
    },
    edit: () => {},
    remove: () => {},
  },
};
</script>